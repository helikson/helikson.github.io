import React from "react";
import WhatsappIcon from "../../assets/icons/WhatsappIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import GithubIcon from "../../assets/icons/GithubIcon";

export default function Contact(): JSX.Element {
    return (
        <div id="contact" className="isolate px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl text--title">
                    Contato
                </h2>

                <div className="mx-auto mt-10 grid max-w-lg md:grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
                    <a
                        className="flex gap-6 items-center"
                        href="https://wa.me/+5534996901464"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <WhatsappIcon width={36} height={36} />

                        <span className="text--color">
                            (34) 99690-1464
                        </span>
                    </a>

                    <a
                        className="flex gap-6 items-center"
                        href="mailto:helikson@icloud.com"
                        rel="noreferrer"
                    >
                        <EmailIcon width={36} height={36} />

                        <span className="text--color">
                            helikson@icloud.com
                        </span>
                    </a>

                    <a
                        className="flex gap-6 items-center"
                        href="https://www.linkedin.com/in/helikson/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon width={36} height={36} />

                        <span className="text--color">
                            linkedin.com/in/helikson
                        </span>
                    </a>

                    <a
                        className="flex gap-6 items-center"
                        href="https://github.com/helikson"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubIcon width={36} height={36} />

                        <span className="text--color">
                            github.com/helikson
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
