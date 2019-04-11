const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'trustmaven.co',
    'animals.com',
    'funnyprogrammers.com',
    'github.com'
];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(website => {
        return website.includes(searchInput);
    })

    return matches.length > 3 ? matches.slice(0,3) : matches
}

module.exports = googleSearch;
