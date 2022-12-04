import { Menu } from "@headlessui/react";

export default function TodoPage () {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1>Todo Page</h1>
      <Menu>
        <Menu.Button className="bg-green-500 py-2 px-6 rounded text-white font-bold">More</Menu.Button>
        <Menu.Items className="flex flex-col">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}