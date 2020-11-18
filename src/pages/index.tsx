import { Button } from 'antd';
import { ContactForm } from '../components/contactForm'
import { Layout, PageHeader } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Index() {
  return <Layout>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    <Content>
      <ContactForm />
    </Content>
    <Footer>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
}
  
export default Index