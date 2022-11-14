import { Button, Icon, Modal, TextContainer } from '@shopify/polaris'
import { useState, useCallback } from 'react'
import { SearchMajor } from '@shopify/polaris-icons'

function ModalExample({ active, handleChange, onChange, Change, state1 }) {
  const [query, setQuery] = useState('')
  const products = [
    {
      title: 'Example Hat',
      img: '',
      class: 'active',
    },
    {
      title: 'Example Pants',
      img: '',
      path: '/Design',
    },
    {
      title: 'Example T-Shirt',
      img: '',
      path: '/Placement',
    },
  ]
  // const [active, setActive] = useState(true)

  // const handleChange = useCallback(() => setActive(!active), [active])

  // const activator = <Button onClick={handleChange}>Open</Button>

  return (
    <div className="modal-wrapper">
      <Modal
        open={active}
        onClose={handleChange}
        title="Add products"
        primaryAction={{
          content: 'Add',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
        <div className="modal-wrapper">
          <Modal.Section>
            <div className="search_filter" style={{ flex: 1 }}>
              <div className="search_icon">
                <Icon source={SearchMajor} color="base" />
              </div>

              <input
                type="text"
                name="search"
                id="searchFilter"
                className="search_box"
                placeholder="Search products"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </Modal.Section>
          {products.map((item, idx) => (
            <Modal.Section>
              <div key={item.title} className="products-list-modal">
                <div className="checkbox-modal">
                  <input
                    type="checkbox"
                    name="products"
                    value={item.title}
                    onChange={Change}
                    checked={state1[idx]}
                  />
                </div>
                <div className="Polaris-Thumbnail_15hj1 Polaris-Thumbnail--sizeSmall_7647q">
                  <img src="./empty.png" alt="img" />
                </div>
                {item.title}
              </div>
            </Modal.Section>
          ))}
          <div className="product-count-modal">0 products selected</div>
        </div>
      </Modal>
    </div>
  )
}
export default ModalExample
