npm.cmd run dev -- --host 127.0.0.1

cd "D:\Softwares\Programming Projects\maki-portfolio-site"
python -m http.server 4173

1. http://127.0.0.1:4173/output/component-lab-v0.2/index.html
2. http://127.0.0.1:4173/output/component-lab-remaining-v0.1/index.html

只回复 CLI SessionStart 测试

$paths = @(
    'D:\Softwares\Programming Projects\maki-llm-wiki\01_raw\memories\.runtime\session-start-probe.ndjson',
    "$env:TEMP\codex-session-start-probe.ndjson",
"$env:TEMP\codex-session-start-probe-error.ndjson"
)

foreach ($path in $paths) {
if (Test-Path -LiteralPath $path) {
Write-Host "`n--- $path"
Get-Content -LiteralPath $path -Encoding utf8 -Tail 10
}
}

$marker = 'D:\Softwares\Programming Projects\maki-llm-wiki\01_raw\memories\.runtime\session-start-probe.ndjson'
Get-Content -LiteralPath $marker -Encoding utf8 -Tail 10
