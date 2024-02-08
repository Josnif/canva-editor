import { useHandlers } from '@rovahub/scenify-sdk'
import { Button, SHAPE, KIND, SIZE } from 'baseui/button'
import Icons from '../../../icons'

function Delete() {
  const handlers = useHandlers()?.handlers
  return (
    <Button
      onClick={() => handlers.objectsHandler.remove()}
      size={SIZE.default}
      kind={KIND.tertiary}
      shape={SHAPE.square}
    >
      <Icons.Delete size={24} />
    </Button>
  )
}

export default Delete
