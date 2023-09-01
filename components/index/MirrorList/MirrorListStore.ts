import { defineStore } from 'pinia'
import * as dayjs from 'dayjs'

type RowData = {
    id: number
    name: string
    lastUpdate: string
    status: string
}

export const useMirrorListStore = defineStore('mirror-list', () => {
    const rowData = ref<RowData[]>([])
    const createData = async () => {
        const tunasync = await fetch('/api/getMirrorListData')
        const data = await tunasync.json()
        rawData.value = data
        rows.value = data
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, idx) => {
                return {
                    id: idx,
                    name: item.name,
                    lastUpdate: dayjs
                        .unix(item['last_update_ts'])
                        .format('YYYY-MM-DD HH:mm'),
                    status: item.status,
                }
            })
    }
    onMounted(async () => {
        await createData()
    })
    return {
        rows,
        rawData,
    }
})
