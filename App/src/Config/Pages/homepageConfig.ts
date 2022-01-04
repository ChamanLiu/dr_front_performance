/**
 * file: Homepage Config file
 * date: 2020-07-23
 * author: Frank
 * lastModify: Frank 2020-07-23
 */

/**
 * This is the homepageConfig file interface
 */
interface HomepageConfig {
    section3: Array<{ title: string; content: string; position: string }>;
}
const homepageConfig: HomepageConfig = {
    section3: [
        {
            title: 'block1Title',
            content: 'block1Content',
            position: 'right',
        },
        {
            title: 'block2Title',
            content: 'block2Content',
            position: 'left',
        },
        {
            title: 'block3Title',
            content: 'block3Content',
            position: 'right',
        },
    ],
};

export default homepageConfig;
