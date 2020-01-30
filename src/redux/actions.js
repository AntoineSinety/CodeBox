export const washApple = () => {
    return {
        type: 'WASH'
    };
}

export const eatApple = () => {
    return {
        type: 'EAT',
        bites: 2
    };
}

export const rotApple = () => {
    return {
        type: 'ROT'
    };
}
export const getListArticle = () => {
    return {
        type: 'LISTING_ARTICLES'
    };
}