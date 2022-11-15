import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Help() {
    return (
        <Page>
            {/* <TitleBar
        title="Page name"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      /> */}
            <section className="help_section">
                <div className="container">
                    <h2 className="text-center">Help</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Polaris-Page__Content">
                                <div className="Polaris-Layout">
                                    <div className="Polaris-Layout__Section">
                                        <div className="Polaris-Card">
                                            <div className="Polaris-Card__Header">
                                                <h2 className="Polaris-Heading">Contact</h2>
                                            </div>
                                            <div className="Polaris-Card__Section">
                                                <p>
                                                    If you have any questions or need help contact us at{" "}
                                                    <a
                                                        target="_blank"
                                                        className="Polaris-Link"
                                                        href="mailto:support@cancode.io"
                                                        rel="noopener noreferrer"
                                                        data-polaris-unstyled="true"
                                                    >
                                                        support@cancode.io
                                                        <span className="Polaris-Link__IconLockup iconlookup">
                                                            <span className="Polaris-Link__IconLayout">
                                                                <span className="Polaris-Icon">
                                                                    <span className="Polaris-VisuallyHidden">
                                                                        (opens a new window)
                                                                    </span>
                                                                    <svg
                                                                        viewBox="-5 -5 20 20"
                                                                        className="Polaris-Icon__Svg"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path d="M14 13v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1c1.037 0 1.04 1.5 0 1.5-.178.005-.353 0-.5 0v6h6V13c0-1 1.5-1 1.5 0zm-3.75-7.25A.75.75 0 0 1 11 5h4v4a.75.75 0 0 1-1.5 0V7.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H11a.75.75 0 0 1-.75-.75z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="Polaris-Card">
                                            <div className="Polaris-Card__Header">
                                                <h2 className="Polaris-Heading">Your Plan</h2>
                                            </div>
                                            <div className="Polaris-Card__Section">
                                                <p>
                                                    <span className="Polaris-Badge Polaris-Badge--statusInfo">
                                                        <span className="Polaris-VisuallyHidden">
                                                            Info{" "}
                                                        </span>
                                                        Free
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="Polaris-Card">
                                            <div className="Polaris-Card__Header">
                                                <h2 className="Polaris-Heading">FAQ</h2>
                                            </div>
                                            <div className="Polaris-Card__Section">
                                                <div id="accordion">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a
                                                                className="btn"
                                                                data-bs-toggle="collapse"
                                                                href="#collapseOne"
                                                            >
                                                                Are the checkboxes 100% customizable?
                                                            </a>
                                                        </div>
                                                        <div
                                                            id="collapseOne"
                                                            className="collapse show"
                                                            data-bs-parent="#accordion"
                                                        >
                                                            <div className="card-body">
                                                                Yes, you can customize your store’s checkboxes
                                                                to suit your needs with our app.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a
                                                                className="collapsed btn"
                                                                data-bs-toggle="collapse"
                                                                href="#collapseTwo"
                                                            >
                                                                Where can I place the checkboxes?
                                                            </a>
                                                        </div>
                                                        <div
                                                            id="collapseTwo"
                                                            className="collapse"
                                                            data-bs-parent="#accordion"
                                                        >
                                                            <div className="card-body">
                                                                You can place the checkboxes anywhere you want
                                                                on your cart or drawer.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a
                                                                className="collapsed btn"
                                                                data-bs-toggle="collapse"
                                                                href="#collapseThree"
                                                            >
                                                                What are the most common uses cases for using
                                                                checkboxes?
                                                            </a>
                                                        </div>
                                                        <div
                                                            id="collapseThree"
                                                            className="collapse"
                                                            data-bs-parent="#accordion"
                                                        >
                                                            <div className="card-body">
                                                                Our users use checkboxes widely for terms and
                                                                conditions, age verification, and location
                                                                confirmation.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="faq-wrap">
                                                    <span>Didn’t find your question? </span>
                                                    <a
                                                        target="_blank"
                                                        className="Polaris-Link"
                                                        href=""
                                                        rel="noopener noreferrer"
                                                        data-polaris-unstyled="true"
                                                    >
                                                        Click here to see our entire F.A.Q.
                                                        <span className="Polaris-Link__IconLockup">
                                                            <span className="Polaris-Link__IconLayout">
                                                                <span className="Polaris-Icon">
                                                                    <span className="Polaris-VisuallyHidden">
                                                                        (opens a new window)
                                                                    </span>
                                                                    <svg
                                                                        viewBox="0 0 20 20"
                                                                        className="Polaris-Icon__Svg"
                                                                        focusable="false"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path d="M14 13v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1c1.037 0 1.04 1.5 0 1.5-.178.005-.353 0-.5 0v6h6V13c0-1 1.5-1 1.5 0zm-3.75-7.25A.75.75 0 0 1 11 5h4v4a.75.75 0 0 1-1.5 0V7.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H11a.75.75 0 0 1-.75-.75z"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Polaris-FooterHelp">
                                    <div className="Polaris-FooterHelp__Content custom_footer_contact">
                                        <div className="Polaris-FooterHelp__Icon contactIconCss">
                                            <span className="Polaris-Icon Polaris-Icon--colorHighlight Polaris-Icon--applyColor">
                                                <span className="Polaris-VisuallyHidden"></span>
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    className="Polaris-Icon__Svg"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-9 3a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0v2zm0-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="Polaris-FooterHelp__Text">
                                            Contact us for help or feature requests:{" "}
                                            <a
                                                target="_blank"
                                                className="Polaris-Link"
                                                href="support@cancode.io"
                                                rel="noopener noreferrer"
                                                data-polaris-unstyled="true"
                                            >
                                                support@cancode.io
                                                <span className="Polaris-Link__IconLockup iconlookup">
                                                    <span className="Polaris-Link__IconLayout">
                                                        <span className="Polaris-Icon">
                                                            <span className="Polaris-VisuallyHidden">
                                                                (opens a new window)
                                                            </span>
                                                            <svg
                                                                viewBox="-5 -5 20 20"
                                                                className="Polaris-Icon__Svg"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M14 13v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1c1.037 0 1.04 1.5 0 1.5-.178.005-.353 0-.5 0v6h6V13c0-1 1.5-1 1.5 0zm-3.75-7.25A.75.75 0 0 1 11 5h4v4a.75.75 0 0 1-1.5 0V7.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H11a.75.75 0 0 1-.75-.75z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    );
}