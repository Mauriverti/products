import Field from '../../shared/components/Field'
import MoneyField from '../../shared/components/MoneyField'
import NumberField from '../../shared/components/NumberField'
import UploadButton from '../../shared/components/uploadButton'
import Product from '../domain/models/product'
import styles from './ProductForm.module.sass'

interface ProductFormProps {
  value: Product
  handleChange: (value: Product) => void
}

export default function ProductForm(props: ProductFormProps) {
  const handleChange = (field: keyof Product, value: unknown) => {
    const newValue: Product = {
      ...props.value,
      [field]: value,
    }
    props.handleChange(newValue)
  }

  const handleUpload = async (value: Promise<string | undefined>) => {
    const avatar = await value
    const newValue: Product = {
      ...props.value,
      avatar,
    }
    props.handleChange(newValue)
  }

  return (
    <div className={styles.container}>
      <div className={styles.fieldLine}>
        <Field label='Nome' value={props.value.name} handleChange={(v) => handleChange('name', v)} required />
        <Field label='Marca' value={props.value.brand} handleChange={(v) => handleChange('brand', v)} required />
      </div>
      <div className={styles.fieldLine}>
        <MoneyField label='Preço' value={props.value.price} handleChange={(v) => handleChange('price', v)} required />
        <NumberField
          label='Qtd. Estoque'
          value={props.value.stored}
          handleChange={(v) => handleChange('stored', v)}
          required
        />
        <NumberField
          label='Qtd. Vendido'
          value={props.value.sold}
          handleChange={(v) => handleChange('sold', v)}
          required
        />
      </div>
      <div>
        <UploadButton label='Upload Imagem' handleUpload={handleUpload} />
      </div>
    </div>
  )
}
