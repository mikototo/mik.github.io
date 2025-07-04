type Project = {
    title: string;
    content: string;
    img: string;
};

type Props = {
    project: Project;
    backToPortfolio: () => void;
};

export default function ProjectDetail({ project, backToPortfolio }: Props) {
    return (
        <div className="project-detail">
            <button className="back-btn" onClick={backToPortfolio}>
                ← Back
            </button>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
        </div>
    );
}
