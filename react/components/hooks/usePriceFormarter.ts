import { useIntl } from 'react-intl'
import { formatCurrency } from 'vtex.format-currency'
import { useRuntime } from 'vtex.render-runtime'

export default function usePriceFormarter() {
    const { culture } = useRuntime()
    const intl = useIntl()

    const formatPrice = (value?: number | null) => {
        return formatCurrency({ intl, culture, value: value || 0 })
    }

    return {
        formatPrice
    }
}