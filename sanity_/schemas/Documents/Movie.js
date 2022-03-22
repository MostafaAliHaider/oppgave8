export default {
    type: 'document',
    name: 'movie',
    title: 'Movie',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'title',
            description: 'Skriv inn film navn',
        },
        {
            type: 'reference',
            name: 'actor',
            title: 'actor',
            to: {type: 'actor'},

        },
    ],
}