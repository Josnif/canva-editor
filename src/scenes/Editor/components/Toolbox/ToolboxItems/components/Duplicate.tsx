import { useHandlers } from '@rovahub/scenify-sdk'
import { Button, SHAPE, KIND, SIZE } from 'baseui/button'
import Icons from '../../../icons'

function Duplicate() {
  const handlers = useHandlers()?.handlers
  return (
    <Button
      onClick={() => {
        handlers.objectsHandler.clone()
      }}
      size={SIZE.default}
      kind={KIND.tertiary}
      shape={SHAPE.square}
    >
      <Icons.Duplicate size={24} />
    </Button>
  )
}

export default Duplicate
