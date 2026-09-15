import { useState } from "react";

function Profile() {
  const [activeYear, setActiveYear] = useState(2026);

  // Sample activity data
  const activity = [
    2, 5, 0, 3, 7, 4, 1, 0, 6, 8, 3, 2, 5, 0,
    4, 6, 9, 3, 1, 0, 5, 7, 4, 2, 6, 8, 3, 1,
    5, 9, 7, 2, 4, 6, 0, 3, 5, 8, 4, 1, 6, 7,
    3, 2, 5, 9, 6, 4, 1, 0, 5, 7, 3, 8, 6, 2,
    4, 7, 9, 5, 3, 1, 6, 8, 4, 2, 5, 7, 3, 6,
    8, 4, 1, 5, 9, 7, 3, 2, 6, 4, 8, 5, 1, 3,
    7, 9, 4, 6, 2, 5, 8, 3, 1, 6, 7, 4, 2, 9
  ];

  function getActivityLevel(value) {
    if (value === 0) return "level-0";
    if (value <= 2) return "level-1";
    if (value <= 4) return "level-2";
    if (value <= 6) return "level-3";
    return "level-4";
  }

  return (
    <div className="profile-page">

      {/* Profile Header */}
      <div className="profile-header">

        <div className="profile-left">

          <div className="profile-avatar">
            S
          </div>

          <div>
            <h1>Surya</h1>
            <p>@surya</p>
            <p className="profile-bio">
              CSE Student • Developer • Problem Solver
            </p>
          </div>

        </div>

        <button className="edit-profile">
          Edit Profile
        </button>

      </div>


      {/* Statistics */}
      <div className="profile-stats">

        <div className="profile-stat">
          <span>🔥</span>
          <div>
            <h2>24</h2>
            <p>Current Streak</p>
          </div>
        </div>

        <div className="profile-stat">
          <span>🏆</span>
          <div>
            <h2>47</h2>
            <p>Longest Streak</p>
          </div>
        </div>

        <div className="profile-stat">
          <span>📅</span>
          <div>
            <h2>156</h2>
            <p>Study Days</p>
          </div>
        </div>

        <div className="profile-stat">
          <span>⏱️</span>
          <div>
            <h2>342h</h2>
            <p>Study Hours</p>
          </div>
        </div>

      </div>


      {/* Activity Section */}
      <div className="activity-card">

        <div className="activity-header">

          <div>
            <h2>Study Activity</h2>
            <p>
              Keep studying every day to maintain your streak 🔥
            </p>
          </div>

          <select
            value={activeYear}
            onChange={(e) =>
              setActiveYear(Number(e.target.value))
            }
          >
            <option value={2026}>2026</option>
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
          </select>

        </div>


        {/* Heatmap */}
        <div className="heatmap-container">

          <div className="months">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>

          <div className="heatmap">

            {activity.map((value, index) => (
              <div
                key={index}
                className={`activity-box ${getActivityLevel(value)}`}
                title={`${value} study sessions`}
              ></div>
            ))}

          </div>

        </div>


        {/* Legend */}
        <div className="activity-legend">

          <span>Less</span>

          <div className="legend-box level-0"></div>
          <div className="legend-box level-1"></div>
          <div className="legend-box level-2"></div>
          <div className="legend-box level-3"></div>
          <div className="legend-box level-4"></div>

          <span>More</span>

        </div>

      </div>


      {/* Bottom Sections */}
      <div className="profile-grid">

        {/* Achievements */}
        <div className="profile-card">

          <h2>🏆 Achievements</h2>

          <div className="achievement">
            <span>🔥</span>
            <div>
              <h3>7 Day Streak</h3>
              <p>Studied for 7 consecutive days</p>
            </div>
          </div>

          <div className="achievement">
            <span>⚡</span>
            <div>
              <h3>Consistency</h3>
              <p>Studied 30 days this month</p>
            </div>
          </div>

          <div className="achievement">
            <span>🎯</span>
            <div>
              <h3>Goal Crusher</h3>
              <p>Completed 100 study tasks</p>
            </div>
          </div>

        </div>


        {/* Subjects */}
        <div className="profile-card">

          <h2>📚 Top Subjects</h2>

          <div className="subject-progress">
            <div className="subject-info">
              <span>C++</span>
              <strong>85%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>


          <div className="subject-progress">
            <div className="subject-info">
              <span>Python</span>
              <strong>78%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "78%" }}
              ></div>
            </div>
          </div>


          <div className="subject-progress">
            <div className="subject-info">
              <span>DBMS</span>
              <strong>72%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>


          <div className="subject-progress">
            <div className="subject-info">
              <span>Java</span>
              <strong>65%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;