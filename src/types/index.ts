import {FunctionalComponent} from "vue";

export interface ChangeItem {
    id: string
    type: 'new' | 'improvement' | 'bug' | 'update'
    text: string
}

export interface NewFeature {
    description: string
}

export interface Change {
    id: string
    date: string
    title: string
    description: string
    updates?: ChangeItem[]
    fixed?: ChangeItem[]
    new?: ChangeItem[]
    newFeatures?: NewFeature[]
}

export interface FaqItem {
    question: string
    answer: string
    open: boolean
}

export type ReadmeSectionCategory = 'Sections' | 'Elements' | 'Creative';

export interface ReadmeSectionType {
    id: string;
    name: string;
    category: ReadmeSectionCategory;
    icon: FunctionalComponent;
    template: string;
}