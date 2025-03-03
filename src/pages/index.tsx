import Layout from "@/components/layouts";
 

export default function defaultPage() {
  return (
    <div>
      <Layout>
        <div className="bg-gray-400 shadow-sm lg:w-[40vh] w-full items-center justify-center flex p-4 text-brand rounded-md mx-auto mt-10">
          {' '}
          <p>welcome wallet connected</p>
        </div>
      </Layout>
    </div>
  );
}
