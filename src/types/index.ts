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

export interface ReadmeSectionType {
    id: string;
    name: string;
    icon: FunctionalComponent;
    template: string;
}