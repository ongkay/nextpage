import moment from 'moment'

export function getTime() {
  moment.locale('id')
  const dateNow = moment().format('DD/MMM - hh:mm:ss a')
  const local = moment.locale()

  return `${local}-${dateNow}`
}
