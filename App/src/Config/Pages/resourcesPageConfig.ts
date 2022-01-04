/**
 * file: this is the resources page config file
 * date: 2020-07-28
 * author: Frank
 * lastModify: Frank 2020-07-28
 */
interface ResourcesPageConfig {
    card1: {
        header: string;
        content: string;
        cardItem: Array<{ title: string; content: string; imageUrl: string }>;
    };
    card2: {
        header: string;
        content: string;
        cardItem: Array<{ title: string; content: string; imageUrl: string }>;
    };
    card3: {
        header: string;
        content: string;
        cardItem: Array<{ title: string; content: string; imageUrl: string }>;
    };
}
const resourcesPageConfig: ResourcesPageConfig = {
    card1: {
        header: 'section2.header',
        content: 'section2.content',
        cardItem: [
            {
                title: 'section2.card1Title',
                content: 'section2.card1Content',
                imageUrl: 'none',
            },
            {
                title: 'section2.card2Title',
                content: 'section2.card2Content',
                imageUrl: 'none',
            },
            {
                title: 'section2.card3Title',
                content: 'section2.card3Content',
                imageUrl: 'none',
            },
        ],
    },
    card2: {
        header: 'section3.header',
        content: 'section3.content',
        cardItem: [
            {
                title: 'section3.card1Title',
                content: 'section3.card1Content',
                imageUrl: 'none',
            },
            {
                title: 'section3.card2Title',
                content: 'section3.card2Content',
                imageUrl: 'none',
            },
            {
                title: 'section3.card3Title',
                content: 'section3.card3Content',
                imageUrl: 'none',
            },
        ],
    },
    card3: {
        header: 'section4.header',
        content: 'section4.content',
        cardItem: [
            {
                title: 'section4.card1Title',
                content: 'section4.card1Content',
                imageUrl: 'none',
            },
            {
                title: 'section4.card2Title',
                content: 'section4.card2Content',
                imageUrl: 'none',
            },
            {
                title: 'section4.card3Title',
                content: 'section4.card3Content',
                imageUrl: 'none',
            },
        ],
    },
};

export default resourcesPageConfig;
