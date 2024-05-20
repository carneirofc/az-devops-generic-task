export * from "./basecommand";
export function isValidMemory(memory: string): boolean {
  const memoryRegex = /^[0-9]+[KMGTE]i?$/;
  return memoryRegex.test(memory);
}

export function isValidCPU(cpu: string): boolean {
  const cpuRegex = /^[0-9]+(\.[0-9]*)?[m]?$/;
  return cpuRegex.test(cpu);
}
