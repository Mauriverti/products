import { Drawer } from '@mui/material'
import { routes } from '../../Routes'
import ProductsSideNavItem from './ProductsSideNavItem'

interface SideNavProps {
  isOpened: boolean
}

export default function SideNav({ ...props }: SideNavProps) {
  return (
    <Drawer
      sx={{
        'position': 'relative',
        'width': props.isOpened ? 240 : 0,
        'height': 'calc(100vh - 50px)',
        'transition': 'width 0.3s',
        'z-index': 9,
        '& .MuiDrawer-paper': {
          width: props.isOpened ? 240 : 0,
          position: 'absolute',
          transition: 'width 0.3s !important',
        },
      }}
      variant='persistent'
      open={props.isOpened}
    >
      <ProductsSideNavItem label='Produtos' target={routes.PRODUCTS_LIST} />
    </Drawer>
  )
}
