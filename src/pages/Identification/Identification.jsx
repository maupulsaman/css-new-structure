import { useState } from "react"
// import nextButton from "../../assets/identification/next-button.svg"
import Button from "../../components/common/Button/Button"
import Select from "../../components/common/Select/Select"
import TextField from "../../components/common/TextField/TextField"
import styles from "./Identification.module.scss"

const documentTypes = ["NIC"]

export default function Identification() {
  const [username, setUsername] = useState("")
  const [documentType, setDocumentType] = useState("NIC")
  const [nicNumber, setNicNumber] = useState("")
  const canContinue = username.trim() !== "" && documentType !== "" && nicNumber.trim() !== ""

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className={styles.screen}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <TextField
            id="username"
            label="Username *"
            value={username}
            onChange={setUsername}
            autoComplete="username"
          />
          <Select
            id="document-type"
            label="Identification Document Type"
            value={documentType}
            onChange={setDocumentType}
            options={documentTypes}
          />
          <TextField
            id="nic-number"
            label="NIC Number *"
            value={nicNumber}
            onChange={setNicNumber}
          />
        </div>
        {/* <Button type="submit" variant="primary" background={nextButton} disabled={!canContinue}>
          Next
        </Button> */}
      </form>
    </main>
  )
}
