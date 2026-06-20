"use client";

import React from "react";
import Image from "next/image";

export default function Ecosystem() {
  return (
    <section className="eco-section">
      <div className="eco-container">
        {/* Header */}
        <div className="eco-header">
          <h2>
            The{" "}
            <span className="eco-spektrum-text">SPEKCTRUM</span>{" "}
            Ecosystem
          </h2>
          <p>All Your Financial Needs in One Place.</p>
        </div>

        {/* Diagram */}
        <div className="eco-diagram">
          {/* Left Column */}
          <div className="eco-col eco-left">
            {/* Item 1 */}
            <div className="eco-item">
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="insurance">🛡️</span></div>
                <span>Insurance<br />Platform</span>
              </div>
              <div className="eco-card border-orange">
                <img src="/Brands/beemaaa_logo.png" alt="Beeमा" className="eco-logo-img" />
                <span className="eco-url">www.beemaaa.com</span>
                <div className="eco-line line-tl"></div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="eco-item">
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="finance">₹</span></div>
                <span>Financial<br />Services</span>
              </div>
              <div className="eco-card border-green">
                <img src="/Brands/sahipe_logo.jpg" alt="सही पे" className="eco-logo-img" />
                <span className="eco-url">www.sahipe.com</span>
                <div className="eco-line line-ml"></div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="eco-item">
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="invest">📈</span></div>
                <span>Investment<br />Platform</span>
              </div>
              <div className="eco-card border-blue">
                <img src="/logo-astro.png" alt="InvestEsy" className="eco-logo-img" />
                <span className="eco-url">www.investesy.in</span>
                <div className="eco-line line-bl"></div>
              </div>
            </div>
          </div>

          {/* Center Hub */}
          <div className="eco-center">
            <div className="eco-hub-ring">
              <div className="eco-hub-inner">
                <img src="/Brands/spekctrum_icon.jpg" alt="SPEKTRUM" className="eco-hub-icon" />
                <div className="eco-hub-text">
                  <span className="eco-spektrum-text">SPEKCTRUM</span>
                  <span className="eco-hub-com">.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="eco-col eco-right">
            {/* Item 4 */}
            <div className="eco-item">
              <div className="eco-card border-purple">
                <img src="/Brands/travelezi.png" alt="TravelEzi" className="eco-logo-img" />
                <span className="eco-url">www.travelezi.com</span>
                <div className="eco-line line-tr"></div>
              </div>
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="travel">✈️</span></div>
                <span>Travel<br />Solutions</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="eco-item">
              <div className="eco-card border-blue">
                <img src="/Brands/udhary_logo.png" alt="उधारी" className="eco-logo-img" />
                <span className="eco-url">www.udhary.com</span>
                <div className="eco-line line-br"></div>
              </div>
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="loan">💸</span></div>
                <span>Loan<br />Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Ecosystem as FinancialEcosystemSection };
