import React from "react";
import JavascriptIcon from "../../assets/icons/JavascriptIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import GitIcon from "../../assets/icons/GitIcon";
import JavaIcon from "../../assets/icons/JavaIcon";
import DatabaseIcon from "../../assets/icons/DatabaseIcon";

export default function Skills(): JSX.Element {
    return (
        <div id="skills" className="isolate px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl text--title">
                    Skills
                </h2>

                <ul className="mx-auto mt-10 grid max-w-lg grid-cols-2 md:grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
                    <li>
                        <span className="sr-only">Javascript</span>
                        <JavascriptIcon width={64} height={64} />
                    </li>

                    <li>
                        <span className="sr-only">React</span>
                        <ReactIcon width={64} height={64} />
                    </li>

                    <li>
                        <span className="sr-only">Git</span>
                        <GitIcon width={64} height={64} />
                    </li>

                    <li>
                        <span className="sr-only">Banco de dados</span>
                        <DatabaseIcon width={64} height={64} />
                    </li>

                    <li>
                        <span className="sr-only">Java</span>
                        <JavaIcon width={64} height={64} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
