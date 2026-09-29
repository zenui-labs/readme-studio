import {Change} from "@/types";

export const changelogData: Change[] = [
    {
        id: '4',
        date: '2026-09-29',
        title: 'Version 1.1: Smarter Generation, Richer Editor',
        description: 'This release makes AI generation far more accurate, adds 15 new templates and 32 new editor elements, and makes every preview match GitHub in both light and dark mode. The editor has also been rebuilt so that the text, the section list and the preview always stay in sync.',
        new: [
            {
                id: '4-1',
                type: 'new',
                text: 'Added 15 new templates, including Minimal, Terminal and Animated profiles, a Designer Portfolio, and templates for hackathons, awesome lists, monorepos, Discord bots, VS Code extensions, Rust crates, Go modules, self-hosted apps, dotfiles, research papers and GitHub Actions'
            },
            {
                id: '4-2',
                type: 'new',
                text: 'Added 32 new editor elements, grouped into Sections, Elements and Creative, with a search box to find them quickly'
            },
            {
                id: '4-3',
                type: 'new',
                text: 'New Elements include GitHub alerts, collapsible sections, task lists, tables, two-column layouts, keyboard shortcuts and call-to-action buttons'
            },
            {
                id: '4-4',
                type: 'new',
                text: 'New Creative elements include wave headers and footers, light and dark logos, skill icons, GitHub stats, streaks, trophies, activity graphs, star history and the contribution snake'
            },
            {
                id: '4-5',
                type: 'new',
                text: 'Previews now show alerts, checklists, clickable table of contents links and logos that change with light or dark mode, just like on GitHub'
            },
            {
                id: '4-6',
                type: 'new',
                text: 'Your README draft is now saved in the browser, so a page refresh no longer loses your work'
            },
            {
                id: '4-7',
                type: 'new',
                text: 'Press Escape to close the fullscreen preview'
            },
        ],
        updates: [
            {
                id: '4-8',
                type: 'update',
                text: 'Repository READMEs are now much more accurate, because the generator looks at your whole project instead of only the top-level files'
            },
            {
                id: '4-9',
                type: 'update',
                text: 'The generator now understands what kind of project you built and which technologies it uses, and writes setup instructions that match your project'
            },
            {
                id: '4-10',
                type: 'update',
                text: 'You can paste almost any GitHub repository link, and a link to a folder creates a README for just that folder'
            },
            {
                id: '4-11',
                type: 'update',
                text: 'Profile READMEs now highlight your main languages, interests and most popular projects'
            },
            {
                id: '4-12',
                type: 'update',
                text: 'Navbar dropdowns now open on hover on desktop'
            },
            {
                id: '4-13',
                type: 'update',
                text: 'Added Sections are now built from the headings in your README, so every section you write appears in the list'
            },
            {
                id: '4-14',
                type: 'update',
                text: 'Elements are always inserted as their own block, and they go to the end of the README when the cursor has not been placed yet'
            },
            {
                id: '4-15',
                type: 'update',
                text: 'Pressing Enter on an empty list item now ends the list, and task lists continue with a new checkbox'
            },
            {
                id: '4-16',
                type: 'update',
                text: 'Clearer messages when GitHub is busy or a repository cannot be found'
            },
        ],
        fixed: [
            {
                id: '4-17',
                type: 'bug',
                text: 'Fixed previews showing unreadable text when the browser theme and the app theme were different'
            },
            {
                id: '4-18',
                type: 'bug',
                text: 'Fixed manual edits being lost when sections were reordered'
            },
            {
                id: '4-19',
                type: 'bug',
                text: 'Fixed removing a section not updating the editor after you had typed in it'
            },
            {
                id: '4-20',
                type: 'bug',
                text: 'Fixed content above the first heading being dropped from the section list'
            },
            {
                id: '4-21',
                type: 'bug',
                text: 'Fixed undo (Ctrl+Z) not working after inserting elements or indenting with Tab'
            },
            {
                id: '4-22',
                type: 'bug',
                text: 'Fixed previewing a template replacing the README you were editing'
            },
            {
                id: '4-23',
                type: 'bug',
                text: 'Fixed some template text disappearing in the preview'
            },
            {
                id: '4-24',
                type: 'bug',
                text: 'Fixed the editor page not scrolling after opening a generated README in the editor'
            },
            {
                id: '4-25',
                type: 'bug',
                text: 'Fixed the generator getting stuck when the AI step failed; the error now appears on the step that failed'
            },
            {
                id: '4-26',
                type: 'bug',
                text: 'Fixed pressing Enter anywhere in the app starting a new generation'
            },
            {
                id: '4-27',
                type: 'bug',
                text: 'Fixed missing list bullets and stacked badges in the preview'
            },
        ]
    },
    {
        id: '3',
        date: '2025-08-06',
        title: 'Version 1.0: A New Era of README Creation',
        description: 'This version streamlines the experience by combining the Features and FAQ pages into a new, modern landing page. It also brings powerful template enhancements and more customization options.',
        new: [
            {
                id: '3-1',
                type: 'new',
                text: 'Combined the Features and FAQ pages into a single landing page'
            },
            {
                id: '3-2',
                type: 'new',
                text: 'Added new pre-built README templates'
            },
            {
                id: '3-3',
                type: 'new',
                text: 'Pre-built templates can now be opened directly in the README Editor'
            },
            {
                id: '3-4',
                type: 'new',
                text: 'Preview or copy a template directly from its card'
            },
            {
                id: '3-5',
                type: 'new',
                text: 'Added a new "Typing Text" section to the pre-built sections'
            },
        ],
        updates: [
            {
                id: '3-6',
                type: 'update',
                text: 'Improved how README Studio looks in search results and when shared on social media'
            }
        ],
        fixed: [
            {
                id: '3-7',
                type: 'bug',
                text: 'Fixed various small UI and UX issues across README Studio'
            }
        ]
    },
    {
        id: '2',
        date: '2025-08-01',
        title: 'Introducing the README Studio Editor',
        description: 'Take full control of your README! With the new in-browser editor, you can create, customize and perfect your README from scratch or after generating it with AI.',
        new: [
            {
                id: '2-1',
                type: 'new',
                text: 'Built-in README Editor for full manual control'
            },
            {
                id: '2-2',
                type: 'new',
                text: 'Pre-built professional sections such as Installation, Usage and Features'
            },
            {
                id: '2-3',
                type: 'new',
                text: 'One-click section insertion at your cursor position'
            },
            {
                id: '2-4',
                type: 'new',
                text: 'Reorder added sections with drag and drop'
            },
            {
                id: '2-5',
                type: 'new',
                text: 'Markdown editor with a live preview that updates as you type'
            },
            {
                id: '2-6',
                type: 'new',
                text: 'Fullscreen preview of your entire README'
            },
            {
                id: '2-7',
                type: 'new',
                text: 'Copy or download your README file with one click'
            },
        ],
        updates: [
            {
                id: '2-8',
                type: 'update',
                text: 'Improved the hero text for clearer messaging'
            },
            {
                id: '2-9',
                type: 'update',
                text: 'Added an "Open in Editor" button to the README preview'
            }
        ],
        fixed: [
            {
                id: '2-10',
                type: 'bug',
                text: 'Fixed responsive layout issues in the editor on mobile'
            },
            {
                id: '2-11',
                type: 'bug',
                text: 'Fixed mismatched social links in generated profiles'
            }
        ]
    },
    {
        id: '1',
        date: '2025-07-26',
        title: 'Beta Launch (v0.1.0)',
        description: 'We are excited to announce the first beta release of README Studio, your new favorite tool for generating stunning GitHub READMEs with AI.',
        new: [
            {
                id: '1-1',
                type: 'new',
                text: 'AI-powered README generator'
            },
            {
                id: '1-2',
                type: 'new',
                text: 'Support for both profile and project READMEs'
            },
            {
                id: '1-3',
                type: 'new',
                text: 'Copy or download your README with one click'
            },
            {
                id: '1-4',
                type: 'new',
                text: 'Modern, fast interface'
            },
        ],
    }
];
