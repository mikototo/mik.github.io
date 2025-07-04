type Project = {
    title: string;
    content: string;   // long-form markdown or plain text
    img: string;       // path in /public or full URL
};

type Props = {
    project: Project;
    backToPortfolio: () => void;
};

export default function ProjectDetail({ project, backToPortfolio }: Props) {
    return (
        <div className="project-detail flex flex-col items-center">
            {/* back button stays fixed top-left on the overlay */}
            <button className="back-btn" onClick={backToPortfolio}>
                ← Back
            </button>

            {/* centered column; scrolls if content is tall */}
            <div className="w-full max-w-3xl mt-16 px-4">
                <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className="w-full max-h-[60vh] object-contain rounded-lg shadow-lg mb-8"
                />

                <h2 className="text-3xl font-semibold mb-4 font-[FuturaTTC]">
                    {project.title}
                </h2>

                {/* preserve line-breaks if content has them */}
                <p className="text-lg leading-relaxed whitespace-pre-line">
                    {project.content}
                </p>
            </div>
        </div>
    );
}
