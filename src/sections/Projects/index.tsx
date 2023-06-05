import React from "react";

export default function Projects(): JSX.Element {
    return (
        <div id="projects" className="isolate px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl text--title">
                    Projetos
                </h2>

                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <span className="text--color">Em construção</span>
                </div>
            </div>
        </div>
    );
}
