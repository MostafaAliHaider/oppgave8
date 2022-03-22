export default {
    type: 'document',
    name: 'actor',
    title: 'Actor',
    fields: [
        {
            type: 'string',
            name: 'actor',
            title: 'actor',
            description: 'Actor`s name',
        },
        {
            type: 'slug',
            name: 'name',
            title: 'name',
            options: {
                source: 'actor',
                maxLength: 200,
                slugify: input => input
                                        .toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .slice(0, 200)
            }
        }
    ]

}