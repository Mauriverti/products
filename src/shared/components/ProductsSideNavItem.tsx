import { useNavigate } from 'react-router-dom'
import WidgetsIcon from '@mui/icons-material/Widgets'
import styles from './SideNavItem.module.sass'

interface ProductsSideNavItemProps {
  label: string
  target: string
}

export default function ProductsSideNavItem({ ...props }: ProductsSideNavItemProps) {
  const navigate = useNavigate()

  const forward = () => {
    navigate(props.target)
  }

  return (
    <div onClick={() => forward()} className={styles.container}>
      <WidgetsIcon />
      <p>{props.label}</p>
    </div>
  )
}
