import Layout from 'components/templates/Layout'

export default function Home() {
  const layoutProps = {
    title: 'Página Inicial',
    subtitle: 'Estamos construindo um template admin'
  }

  return (
    <Layout {...layoutProps}>
      <h1>Admin</h1>
    </Layout>
  )
}
