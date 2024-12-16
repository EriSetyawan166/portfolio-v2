import Marquee from "react-fast-marquee";

function TechStack() {
    const gradientWidth = window.innerWidth >= 768 ? 200 : 20;
    return (
        <div id="tech-stack-section" className="pt-40 md:pt-20 h-screen flex flex-col items-start lg:items-center justify-center px-0 lg:px-0">
            <p className='font-medium text-[#7b75a3] text-5xl md:text-6xl'>Tech Stack</p>
            <p className="font-medium text-justify lg:text-center">Here are some programming languages and frameworks that I have experience with:</p>
            <div className="flex flex-col gap-5 mt-20 w-full">
                <Marquee gradient gradientWidth={gradientWidth} gradientColor="#F8F8FF" autoFill speed={30}>
                    <img src="https://img.shields.io/badge/-React-FFB6C1?style=flat&logo=react" alt="React" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Vite-FF99CC?style=flat&logo=vite" alt="Vite" className="h-6  md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Tailwind-98FB98?style=flat&logo=tailwindcss" alt="Tailwind" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Bootstrap-FFD700?style=flat&logo=bootstrap" alt="Bootstrap" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-TypeScript-AE81FF?style=flat&logo=typescript" alt="TypeScript" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-jQuery-AFEEEE?style=flat&logo=jquery" alt="jQuery" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Node.js-87CEEB?style=flat&logo=node.js" alt="Node.js" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-NestJS-FF6347?style=flat&logo=nestjs" alt="NestJS" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Next.js-F0E68C?style=flat&logo=next.js" alt="Next.js" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Laravel-E0FFFF?style=flat&logo=laravel" alt="Laravel" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-MySQL-FFD700?style=flat&logo=mysql" alt="MySQL" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-PostgreSQL-D8BFD8?style=flat&logo=postgresql" alt="PostgreSQL" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-MongoDB-90EE90?style=flat&logo=mongodb" alt="MongoDB" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-HTML-FF6347?style=flat&logo=html5" alt="HTML" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-CSS-98FB98?style=flat&logo=css3" alt="CSS" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-JavaScript-F5DEB3?style=flat&logo=javascript" alt="JavaScript" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Java-D3D3D3?style=flat&logo=java" alt="Java" className="h-6  md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Python-FFDEAD?style=flat&logo=python" alt="Python" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-C-8A2BE2?style=flat&logo=c" alt="C" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-PHP-FF4500?style=flat&logo=php" alt="PHP" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-GitHub-808080?style=flat&logo=github" alt="GitHub" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Jira-000080?style=flat&logo=jira" alt="Jira" className="h-6  md:h-8 mr-3" />
                </Marquee>

                <Marquee gradient gradientColor="#F8F8FF" gradientWidth={gradientWidth} autoFill speed={30} direction="right">
                    <img src="https://img.shields.io/badge/-TypeScript-B6D3FF?style=flat&logo=typescript" alt="TypeScript" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-PHP-FAD02E?style=flat&logo=php" alt="PHP" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Node.js-D3E9F1?style=flat&logo=node.js" alt="Node.js" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-MongoDB-B9E8C3?style=flat&logo=mongodb" alt="MongoDB" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Tailwind-FFB3F0?style=flat&logo=tailwindcss" alt="Tailwind" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-JavaScript-FFF7D6?style=flat&logo=javascript" alt="JavaScript" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Next.js-C1E1FF?style=flat&logo=next.js" alt="Next.js" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-HTML-E4A7C1?style=flat&logo=html5" alt="HTML" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Vite-C9F0FF?style=flat&logo=vite" alt="Vite" className="h-6  md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-jQuery-FFB6A1?style=flat&logo=jquery" alt="jQuery" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-React-D7B2FF?style=flat&logo=react" alt="React" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-MySQL-D6E8FF?style=flat&logo=mysql" alt="MySQL" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-NestJS-F8A6A6?style=flat&logo=nestjs" alt="NestJS" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-PostgreSQL-B0C7FF?style=flat&logo=postgresql" alt="PostgreSQL" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Java-C1C1C1?style=flat&logo=java" alt="Java" className="h-6  md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Bootstrap-FFEB93?style=flat&logo=bootstrap" alt="Bootstrap" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Laravel-D2F5D8?style=flat&logo=laravel" alt="Laravel" className="h-6     md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-C-DCB7FF?style=flat&logo=c" alt="C" className="h-6   md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-CSS-C1F5FF?style=flat&logo=css3" alt="CSS" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-GitHub-CECED0?style=flat&logo=github" alt="GitHub" className="h-6    md:h-8 mr-3" />
                    <img src="https://img.shields.io/badge/-Jira-A9C7F9?style=flat&logo=jira" alt="Jira" className="h-6  md:h-8 mr-3" />
                </Marquee>
            </div>


        </div>
    )
}

export default TechStack