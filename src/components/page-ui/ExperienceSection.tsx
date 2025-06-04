'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Tabner Inc ',
        description: (
            <ul className="list-disc">
                <li>
                    Assisting in the design, development, and maintenance of web applications across both front-end and back-end technologies for new
                    product development.
                </li>
                <li>
                    Wrote clean, scalable code, collaborated with senior developers and cross-functional teams, and troubleshooted issues to ensure
                    optimal performance.
                </li>
            </ul>
        ),
        badge: 'Junior Software Engineering Intern/May 2025 - Aug 2025'
    },
    {
        title: 'Mercor',
        description: (
            <ul className="list-disc">
                <li>Applied mathematical and statistical models to analyze complex datasets.</li>
                <li>Created and Researched predictive models and worked on business strategy.</li>
                <li>Delivered high-quality reports to project lead and conducted data manipulation using MATLAB. </li>
            </ul>
        ),
        badge: 'Math Intelligence Analyst/Feb 2025 - Present'
    },
    {
        title: 'Cohere for AI',
        description: (
            <ul className="list-disc">
                <li>Long Context Techniques and Models</li>
                <li>Multilingual Long Context Reasoning Benchmark (CoAuthoring Paper).</li>
                <li>Participating in weekly meetings, creating machine learning models, and note-taking on PDEs.</li>
            </ul>
        ),
        badge: 'Research Fellow/Jan 2025 - Present'
    },
    {
        title: 'Velocity Labs',
        description: (
            <ul className="list-disc">
                <li>Education Learning: Understanding Quantitative Analysis, Markets and Trading</li>
                <li>Quantitative Interview Training: Market Making and Probability $200k AUM , 6.3% acceptance rate and monthly reports.</li>
            </ul>
        ),
        badge: 'Quantitative Analyst/Jan 2025 - Present'
    }
];
