import { Upload } from '@mui/icons-material'
import { Button, ButtonProps } from '@mui/material'
import { ChangeEvent } from 'react'
import file2Base64 from '../../user/domain/file2base64.converter'

interface UploadButtonProps extends ButtonProps {
  handleUpload: (data: Promise<string | undefined>) => Promise<void>
}

export default function UploadButton(props: UploadButtonProps) {
  const parseUpload = async (e: ChangeEvent<HTMLInputElement>): Promise<string | undefined> => {
    const files: FileList | null = e.target.files
    if (!files || !files[0]) {
      return undefined
    }
    const data = await file2Base64(files[0])
    if (data) {
      return data.toString()
    }
    return undefined
  }

  const customHandleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleUpload(parseUpload(e))
  }

  return (
    <Button variant='contained' component='label' startIcon={<Upload />} {...props}>
      {props.label}
      <input type='file' hidden onChange={customHandleUpload} accept='image/png, image/jpeg' />
    </Button>
  )
}
