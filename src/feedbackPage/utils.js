
const parseEntityIdFromQuery = (query) => {
    const cancelString =  decodeURIComponent(query);
    const re = /.*entityId=(.*?)((&.*)|$)/;
    const match = cancelString.match(re);

    if (match && match[1]) {
        return match[1];
    }
    return '';
};

export {parseEntityIdFromQuery};
