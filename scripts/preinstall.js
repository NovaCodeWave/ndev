/*
 * @Description: pnpm 安装脚本
 * @Author: yusunqi
 * @Date: 2024-07-18 21:00:25
 * @LastEditTime: 2024-07-18 21:02:57
 * Copyright (c) 2024 by yusunqi, All Rights Reserved.
 */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log('请使用 pnpm 安装')
  console.warn(
    `\u001b[33mThis repository requires useing pnpm as the package manager` +
      `for scripts to work properly.\u001b[39m\n`
  )
  process.exit(1)
}