import FormattedDate from "@ya.praktikum/react-developer-burger-ui-components";


export const formattedDate =() => {
    const dateFromServer = '2022-10-10T17:33:32.877Z'
    return <FormattedDate date={new Date(dateFromServer)} />
  }


