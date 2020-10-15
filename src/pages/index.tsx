import routes from './routes'
import { convertRoutesToComponents } from 'helpers/pagesParser'

const Pages = (): any => {
  return convertRoutesToComponents(routes)
}
export default Pages