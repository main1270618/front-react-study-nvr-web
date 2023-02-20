

interface CategoryBoxProps {
    rowdatas: {
        articles: never[];
        id: string,
        nm: string,
        // articles?: {
        //     id: string,
        //     title: string,
        //     content: string,
        // }[] | never[],
    }[],
}

interface ArticleBoxProps {
    rowdata: {
        id: string,
        title: string,
        content: string,
    },
}

interface NewsstandViewProps {
    selectedTabId: string,
    categories: {
        id: string,
        nm: string,
        articles?: {
            id: string,
            title: string,
            content: string,
        }[],
    }[]
}

export type {
    CategoryBoxProps,
    ArticleBoxProps,
    NewsstandViewProps,
};