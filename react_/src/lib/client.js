import sanityClient from '@sanity/client'

const options = {
    projectId: "37vvltpe",
    dataset: "production",
    apiVerison: '2022-03-25',

}
const client = sanityClient ({
    ...options,
    useCdn: false,
})

export default client