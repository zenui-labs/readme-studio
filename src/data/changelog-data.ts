import {Change} from "@/types";

export const changelogData: Change[] = [
    {
        id: '3',
        date: '2025-08-06',
        title: 'Version 1.0 — A New Era of README Creation',
        description: 'This version brings a more streamlined experience by combining the Features and FAQ pages into a new modern landing page. We’ve added powerful template enhancements and more customization options for users.',
        new: [
            {
                id: '3-1',
                type: 'new',
                text: 'Features & FAQ pages are now combined into a unified landing page'
            },
            {
                id: '3-2',
                type: 'new',
                text: 'New pre-built README templates added'
            },
            {
                id: '3-3',
                type: 'new',
                text: 'Pre-built templates now support direct editing in the README Editor'
            },
            {
                id: '3-4',
                type: 'new',
                text: 'Users can preview or copy the template directly from the card'
            },
            {
                id: '3-5',
                type: 'new',
                text: 'New “Typing Text” section added in the pre-built sections'
            },
        ],
        updates: [
            {
                id: '3-6',
                type: 'update',
                text: 'Updated meta tags and Open Graph image for better SEO and sharing'
            }
        ],
        fixed: [
            {
                id: '3-7',
                type: 'bug',
                text: 'Fixed various small UI/UX issues across README Studio'
            }
        ]
    },
    {
        id: '2',
        date: '2025-08-01',
        title: 'Introducing the README Studio Editor',
        description: 'Take full control over your README! With the new in-browser Editor, you can now create, customize, and perfect your README from scratch or after generating with AI.',
        new: [
            {
                id: '2-1',
                type: 'new',
                text: 'Built-in README Editor for full manual control'
            },
            {
                id: '2-2',
                type: 'new',
                text: 'Pre-built professional sections (Installation, Usage, Features, etc.)'
            },
            {
                id: '2-3',
                type: 'new',
                text: 'One-click section insertion at your current cursor position'
            },
            {
                id: '2-4',
                type: 'new',
                text: 'Live reordering of added sections with drag & drop'
            },
            {
                id: '2-5',
                type: 'new',
                text: 'Instant markdown code editor with syntax-aware updates'
            },
            {
                id: '2-6',
                type: 'new',
                text: 'Full-screen preview of your entire README'
            },
            {
                id: '2-7',
                type: 'new',
                text: 'One-click copy or download your generated README file'
            },
        ],
        updates: [
            {
                id: '2-8',
                type: 'update',
                text: 'Improved hero text for clearer messaging'
            },
            {
                id: '2-9',
                type: 'update',
                text: 'New “Open in editor” button added to README preview modal'
            }
        ],
        fixed: [
            {
                id: '2-10',
                type: 'bug',
                text: 'Resolved mobile responsiveness issues in Editor layout'
            },
            {
                id: '2-11',
                type: 'bug',
                text: 'Fixed social link mismatches in user profiles'
            }
        ]
    },
    {
        id: '1',
        date: '2025-07-26',
        title: 'Beta Launch (v0.1.0)',
        description: 'We’re excited to announce the first beta release of Readme Studio — your new favorite tool for generating stunning GitHub READMEs using AI.',
        new: [
            {
                id: '1-1',
                type: 'new',
                text: 'AI-powered README Generator'
            },
            {
                id: '1-1',
                type: 'new',
                text: 'Support for Both Personal & Project READMEs'
            },
            {
                id: '1-1',
                type: 'new',
                text: 'One-click Copy or Download'
            },
            {
                id: '1-1',
                type: 'new',
                text: 'Modern, Fast UI'
            },
        ],
    }
];