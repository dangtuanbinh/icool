import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectWalletModal, LanguageModal, NetworkModal } from "../../views";
import "./sidebar.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-sidebar";

export const Sidebar = () => {
  const navigate = useNavigate();

  const [showNetworkModal, setShowNetworkModal] = useState<boolean>(false);
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showConnectWalletModal, setShowConnectWalletModal] =
    useState<boolean>(false);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__connect-wallet-wrapper`} onClick={() => setShowConnectWalletModal(true)}>
        <div className={`${classNamePrefix}__connect-wallet`}>
          Connect Wallet
        </div>
      </div>
      <div className={`${classNamePrefix}__navigation-group`}>
        <div className={`${classNamePrefix}__navigation-item`}>
          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-house-door"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              Home
            </div>
          </div>

          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/profile")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-person"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              My Profile
            </div>
          </div>

          <div className={`${classNamePrefix}__navigation-item-coming`}>
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-person"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              Feed
            </div>
            <div className={`${classNamePrefix}__navigation-item-soon`}>
              Soon
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__navigation-item`}>
          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/nft")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-star"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              NFTs
            </div>
          </div>

          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/defi")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-arrow-up-right-circle-fill"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              DeFi
            </div>
          </div>

          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/daos")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-grid-3x3-gap"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              DAOs
            </div>
          </div>
        </div>
        <div className={`${classNamePrefix}__navigation-item`}>
          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/swap")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-skip-forward-circle-fill"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              Swap
            </div>
          </div>

          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/bridge")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-fingerprint"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              Bridge
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__navigation-responsive`}>
          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => navigate("/bridge")}
          >
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-book-fill"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              Address Boook
            </div>
          </div>

          <div className={`${classNamePrefix}__navigation-item-content`}>
            <div className={`${classNamePrefix}__navigation-item-icon`}>
              <i className="bi bi-three-dots"></i>
            </div>
            <div className={`${classNamePrefix}__navigation-item-title`}>
              More
            </div>
          </div>

          <div
            className={`${classNamePrefix}__navigation-item-content`}
            onClick={() => setShowNetworkModal(true)}
          >
            <img
              className={`${classNamePrefix}__network-logo`}
              src="https://zapper.fi/images/networks/ethereum-icon.png"
              alt=""
            />
            <div className={`${classNamePrefix}__navigation-item-title`}>
              Ethereum
            </div>
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}__footer-responsive`}>
        <div
          className={`${classNamePrefix}__footer-responsive-left`}
          onClick={() => setShowLanguageModal(true)}
        >
          <img src="https://zapper.fi/images/currencies/USD.svg" alt="" />
          <span>USD</span>
        </div>

        <div className={`${classNamePrefix}__footer-responsive-right`}>
          Switch
        </div>
      </div>

      <div className={`${classNamePrefix}__footer`}>
        <div
          className={`${classNamePrefix}__navigation-item-content statistic`}
        >
          <div className={`${classNamePrefix}__statistic-icon`}>
            <i className="bi bi-fuel-pump-fill"></i>
          </div>
          <div className={`${classNamePrefix}__statistic-title`}>13</div>
        </div>

        <div className={`${classNamePrefix}__link`}>
          <a
            className={`${classNamePrefix}__link-item`}
            href="https://zapper.fi/terms"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>
          <div className={`${classNamePrefix}__link-divider`}>-</div>
          <a
            className={`${classNamePrefix}__link-item`}
            href="https://zapper.fi/privacy-policy.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <NetworkModal
        isOpen={showNetworkModal}
        onClose={() => setShowNetworkModal(false)}
      />

      <LanguageModal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
      />

      <ConnectWalletModal
        isOpen={showConnectWalletModal}
        onClose={() => setShowConnectWalletModal(false)}
      />
    </div>
  );
};
