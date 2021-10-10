import { FunctionComponent, useState } from 'react'
import { ImportExportWidgetModel } from '../utils/models'
// styling
import * as Style from '../styles/widgets/import-export-widget'
// data
import importExport from '../data/import-export.json'

const ImportExportWidget: FunctionComponent<ImportExportWidgetModel> = ({ text, id, data, onClick }) => {
    const [active, setActive] = useState()
    return (
        <Style.Container onClick={onClick}>
            {importExport.map((item: any) => {
                return (
                    <Style.Item 
                        onClick={() => setActive(item.id)} 
                        active={active === item.id}
                    >{item.name}</Style.Item>
                )
            })}

        </Style.Container>
    )
}

export default ImportExportWidget