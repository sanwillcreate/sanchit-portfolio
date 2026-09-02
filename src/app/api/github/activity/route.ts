import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN is not configured" },
      { status: 500 }
    );
  }

  const query = `
    query {
      viewer {
        login
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "GitHub API request failed" },
        { status: response.status }
      );
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GitHub GraphQL errors:", result.errors);

      return NextResponse.json(
        { error: "GitHub GraphQL request failed" },
        { status: 500 }
      );
    }

    const calendar =
      result.data.viewer.contributionsCollection.contributionCalendar;

    return NextResponse.json({
      username: result.data.viewer.login,
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch (error) {
    console.error("GitHub activity error:", error);

    return NextResponse.json(
      { error: "Failed to fetch GitHub activity" },
      { status: 500 }
    );
  }
}