import Repositories from '~/repositories'

export const useRepository = () => {
  const { t } = useI18n()

  return Repositories(t)
}
