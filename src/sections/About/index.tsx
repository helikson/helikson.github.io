import React from "react";

export default function About(): JSX.Element {
    return (
        <div id="about" className="isolate mx-auto max-w-2xl">
            <p className="text--subtitle">
                Engenheiro de Software
            </p>

            <h1 className="text--title">
                Helikson Rufino
            </h1>

            <p className="mt-6 text--subtitle text-justify">
                <span>Atuo na área desde 2016 como Full Stack, estou sempre disposto a auxiliar e resolver novos desafios, assim como aprender com eles.</span>
                <br/>
                Tenho experiências em desenvolvimento Web e Mobile atuando principalmente com <b>React.js</b>, <b>React-Native</b>, <b>Java</b> e banco de dados <b>PL/SQL</b>, <b>MySQL</b> e <b>SQL Server</b>.<br/>
                Também utilizando as metodologias ágeis <b>Kanban</b> e <b>Scrum</b>, versionamento com o <b>git</b>, <b>CI/CD</b> no GitLab e conteinerização com <b>Docker</b>.<br/>
                Atualmente atuando e estudando mais sobre <b>Arquitetura de Software</b>.
            </p>

            <p className="mt-4">
                <a
                    className="button--primary"
                    href="https://www.icloud.com/iclouddrive/008OoWnIt71CWlPIVvEXq6GDg#curriculo%5FHelikson%5FRufino"
                    target="_blank"
                    rel="noreferrer"
                >
                    Baixar currículo
                </a>
            </p>
        </div>
    );
}
