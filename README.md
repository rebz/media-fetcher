_This app is a personal project to learn new tools._

---

# Media Fetcher
Search for online media. Stream to your device.

## Key tech used for learning
* Vite - Fast, local development
* Tailwind - Utility-based CSS
* Vue 3 - Composition API
* Docker - Nodejs app deployment onto Synology NAS
* WebSockets - inform UI of updates with requested info
* Other:
    * ...SSH access
    * ...Filesystem read/write
    * ...JSON DB Storage (instead of managing an entire DB)
    * ...Prettier / Husky / Commit Hook

#### alternative
* no node backend
* all node-based functions moved to firebase cloud-functions
* authentication into UI handled through firebase auth
* graphql cloud functions through firebase
* firebase subscriptions in graphql eliminate WS server-side management
* use apollo to handle sync between backend with frontend

## Resources
* https://auth0.com/blog/use-docker-to-create-a-node-development-environment/