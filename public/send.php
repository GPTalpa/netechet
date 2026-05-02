<?php
// показать ошибки
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");

// функция логирования
function logToFile($message)
{
    file_put_contents(__DIR__ . '/amocrm_debug.log', date('[Y-m-d H:i:s] ') . $message . "\n", FILE_APPEND);
}

// Telegram
$token = '8348210069:AAELnP8G_kzI_pAQ3LqFPKDHdYtodpnxWgk';
$chat_id = -1003671732241;

// Авторизация amoCRM
$longLivedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViODFlNzdlNTYwNWYyMzU3ZDFhY2Y4N2NmZDgyZDU3NmMyNTgwM2ViZjUzMWQ2NGY5NTIzMzNkNjQxOTE3YzU4ZjcxNzZmM2M0YTE2OTVjIn0.eyJhdWQiOiI4ODdkYzg0My1iZmRhLTRiNzYtOTFhZC1hM2E2YmI4ZTgzNTciLCJqdGkiOiI1YjgxZTc3ZTU2MDVmMjM1N2QxYWNmODdjZmQ4MmQ1NzZjMjU4MDNlYmY1MzFkNjRmOTUyMzMzZDY0MTkxN2M1OGY3MTc2ZjNjNGExNjk1YyIsImlhdCI6MTc3MjY0Nzk3MiwibmJmIjoxNzcyNjQ3OTcyLCJleHAiOjE4MDQxMTg0MDAsInN1YiI6IjEzNTM3NzM4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyOTE5ODk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNjkxZGU5MTQtZjI1Zi00OGI5LTk4MmYtMjY3MWMwMzY0YTEyIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.B8EAWKvn4Bufyj9ZPTfOpj9pQofl3FSnFjCRfHTHKxKNIz1zzYzBsneVC1JOtTxzxXpHdybAJAI6Xfr7daBUN-Wh6OA25phPt4QHd6AVscphx5A-5zF8V8xWSdb6noIldqNj331fUEOOczX5PALgmbwVlXNDoFCCTWm3dRXvFEYTe2kBwrn2Zzw08QzU68yuW2D9v-kh0bjW9QqBdR_SswsKm5nN2SxvC7aojTlm-U_lGDcD80XlEyd_w_wiUcyGbywpMWALlonawHbZYwYMdGMkvYFcMHYOK3qmg54JsdJ7F93ReNuQd3Yw0moVLm6uTEkELxrmlNceuvlFero5vA';

// Входящие данные
$input = json_decode(file_get_contents("php://input"), true);

$contact    = $input["contact"] ?? [];
$quiz       = $input["quiz"] ?? [];
$stockState = $input["stockState"] ?? null;
$tracking   = $input["tracking"] ?? [];

$name       = $contact["name"] ?? "-";
$phone      = $contact["phone"] ?? "-";
$customValue = $contact["customValue"] ?? "-";

$foundation = $quiz["foundation"] ?? "-";
$lvlWater   = $quiz["lvlWater"] ?? "-";
$service    = $quiz["service"] ?? "-";
$term       = $quiz["term"] ?? "-";

// ID кастомных полей
$phoneFieldID  = 1285849;
$foundationID  = 1310365;
$lvlWaterID    = 1310367;
$serviceID     = 1310369;
$termID        = 1310371;
$customValueID = 1310363;
$stockStateID  = 1401109;

function getTrackingValue($tracking, $key, $default = '-')
{
    return isset($tracking[$key]) && !empty($tracking[$key]) ? $tracking[$key] : $default;
}

$trackingFields = [
    // UTM
    'utm_source' => 1285863,
    'utm_medium' => 1285859,
    'utm_campaign' => 1285861,
    'utm_term' => 1285865,
    'utm_content' => 1285857,
    'utm_referrer' => 1285867,

    // OpenStat
    'openstat_service' => 1285873,
    'openstat_campaign' => 1285875,
    'openstat_ad' => 1285877,
    'openstat_source' => 1285879,

    // Коллтрекинг
    'roistat' => 1285869,
    'gclientid' => 1285883,
    '_ym_uid' => 1285885,
    '_ym_counter' => 1285887,

    // ID кликов
    'gclid' => 1285889,
    'yclid' => 1285891,
    'fbclid' => 1285893,

    // Рефереры
    'referrer' => 1285871,
    'from' => 1285881,
];


function formatStockState($state)
{
    switch ($state) {
        case 'neighbor':
            return 'Приведи соседа';
        case 'family':
            return 'Многодетная семья';
        case 'veteran':
            return 'Участник ВОВ или СВО';
        default:
            return '-';
    }
}

$customFields = [
    [
        "field_id" => $customValueID,
        "values" => [["value" => $customValue]]
    ],
    [
        "field_id" => $foundationID,
        "values" => [["value" => $foundation]]
    ],
    [
        "field_id" => $lvlWaterID,
        "values" => [["value" => $lvlWater]]
    ],
    [
        "field_id" => $serviceID,
        "values" => [["value" => $service]]
    ],
    [
        "field_id" => $termID,
        "values" => [["value" => $term]]
    ],
    [
        "field_id" => $stockStateID,
        "values" => [["value" => $stockStateText]]
    ]
];

foreach ($trackingFields as $paramName => $fieldId) {
    $value = getTrackingValue($tracking, $paramName);
    if ($value !== '-') {
        $customFields[] = [
            "field_id" => $fieldId,
            "values" => [["value" => $value]]
        ];
    }
}

$stockStateText = formatStockState($stockState);

logToFile("INPUT: " . file_get_contents("php://input"));

try {

    logToFile("Создаём лид через API напрямую");

    $url = "https://anikeevsa97.amocrm.ru/api/v4/leads/complex";

    $data = [
        [
            "name" => "Заявка от $name",
            "price" => 0,
            "custom_fields_values" => $customFields,
            "_embedded" => [
                "contacts" => [
                    [
                        "first_name" => $name,
                        "custom_fields_values" => [
                            [
                                "field_id" => 1285849,
                                "values" => [
                                    [
                                        "enum_id" => 1425855,
                                        "value" => $phone
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ];

    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => [
            "Authorization: Bearer " . $longLivedToken,
            "Content-Type: application/json"
        ],
        CURLOPT_POSTFIELDS => json_encode($data)
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    logToFile("Ответ API: " . $response);

    if ($httpCode !== 200 && $httpCode !== 201) {
        throw new Exception("Ошибка создания лида");
    }

    logToFile("Лид создан успешно через API");
} catch (\Throwable $e) {

    logToFile("Ошибка лида: " . $e->getMessage());
    exit;
}
// --------------------
// 📩 Telegram уведомление
// --------------------

$message = "
📩 Новая заявка

👤 Имя: $name
📞 Телефон: $phone
💬 Сообщение: $customValue

Тип фундамента: $foundation
Уровень грунтовых вод: $lvlWater
Услуга: $service
Когда готовы: $term
";

if ($stockState) {
    $message .= "\n🎁 Акция: $stockStateText";
}

file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?" . http_build_query([
    "chat_id" => $chat_id,
    "text"    => $message,
    "parse_mode" => "HTML"
]));

echo json_encode(["success" => true]);
