import EditIcon from '@mui/icons-material/Edit'
import { Avatar, IconButton, LinearProgress, Tooltip } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Product from '../../../product/domain/models/product'
import styles from './Grid.module.sass'

interface GridProps {
  data: Product[]
  handleEdit: (product: Product) => void
}

export default function Grid(props: GridProps) {
  const gridStructure: GridColDef[] = [
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
        return <Avatar src={params.value.avatar} />
      },
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
    },
    {
      field: 'name',
      headerName: 'Nome',
      width: 250,
    },
    {
      field: 'brand',
      headerName: 'Marca',
      width: 250,
    },
    {
      field: 'price',
      headerName: 'Preço',
      width: 70,
    },
    {
      field: 'stored',
      headerName: 'Estoque',
      width: 70,
    },
    {
      field: 'sold',
      headerName: 'Vendido',
      width: 70,
    },
    {
      field: 'createdAt',
      headerName: 'Criação',
      width: 250,
    },
    {
      field: 'edit',
      headerName: '',
      renderCell: (params) => {
        return (
          <Tooltip title='Editar'>
            <IconButton aria-label='edit' onClick={() => props.handleEdit(params.row)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )
      },
    },
  ]

  return (
    <DataGrid
      rows={props.data}
      columns={gridStructure}
      className={styles.grid}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 15,
          },
        },
      }}
      slots={{
        loadingOverlay: LinearProgress,
      }}
    />
  )
}
