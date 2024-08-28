import filmsLogic from './films/logic'
import peopleLogic from './people/logic'
import planetsLogic from './planets/logic'
import speciesLogic from './species/logic'
import starshipsLogic from './starships/logic'
import vehiclesLogic from './vehicles/logic'

export default [
...peopleLogic,
...planetsLogic,
...filmsLogic,
...speciesLogic,
...vehiclesLogic,
...starshipsLogic
 ];