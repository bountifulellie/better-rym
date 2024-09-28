const descriptors = (
  [
    [38512, 'a cappella'],
    [39129, 'abstract'],
    [21682, 'acoustic'],
    [38484, 'aggressive'],
    [39232, 'alcohol'],
    [38376, 'aleatory'],
    [39008, 'alienation'],
    [37870, 'anarchism'],
    [39448, 'androgynous vocals'],
    [37970, 'angry'],
    [38850, 'anthemic'],
    [38817, 'anti-religious'],
    [37665, 'anxious'],
    [38317, 'apathetic'],
    [38074, 'apocalyptic'],
    [38089, 'aquatic'],
    [37944, 'atmosphere'],
    [38531, 'atmospheric'],
    [38577, 'atonal'],
    [38090, 'autumn'],
    [39401, 'avant-garde'],
    [39088, 'ballad'],
    [38102, 'bittersweet'],
    [38560, 'boastful'],
    [38349, 'breakup'],
    [38725, 'calm'],
    [39300, 'carol'],
    [39150, 'chamber music'],
    [38682, 'chaotic'],
    [39318, "children's music"],
    [39563, 'choral'],
    [39262, 'Christian'],
    [39331, 'Christmas'],
    [38093, 'cold'],
    [38701, 'complex'],
    [38327, 'composition'],
    [39592, 'concept album'],
    [39163, 'concerto'],
    [38825, 'conscious'],
    [21492, 'crime'],
    [38308, 'cryptic'],
    [38075, 'dark'],
    [38871, 'deadpan'],
    [38338, 'death'],
    [38819, 'dense'],
    [37991, 'depressive'],
    [38649, 'desert'],
    [39307, 'dissonant'],
    [39534, 'disturbing'],
    [21331, 'drugs'],
    [38704, 'eclectic'],
    [39301, 'educational'],
    [37669, 'energetic'],
    [38328, 'ensemble'],
    [38083, 'epic'],
    [37951, 'ethereal'],
    [38813, 'existential'],
    [39156, 'fairy tale'],
    [27978, 'fantasy'],
    [39305, 'female vocalist'],
    [38547, 'folklore'],
    [38647, 'forest'],
    [39084, 'form'],
    [38680, 'funereal'],
    [38077, 'futuristic'],
    [39398, 'generative music'],
    [39332, 'Halloween'],
    [27408, 'happy'],
    [38502, 'hateful'],
    [38699, 'heavy'],
    [39434, 'hedonistic'],
    [27409, 'history'],
    [39302, 'holiday'],
    [38350, 'humorous'],
    [39151, 'hymn'],
    [37940, 'hypnotic'],
    [38325, 'ideology'],
    [38417, 'improvisation'],
    [38307, 'infernal'],
    [21468, 'instrumental'],
    [39160, 'interlude'],
    [39157, 'intro'],
    [38716, 'introspective'],
    [39311, 'Islamic'],
    [39303, 'jingle'],
    [39135, 'lethargic'],
    [21334, 'LGBT'],
    [38233, 'lo-fi'],
    [34141, 'lobit'],
    [37644, 'lonely'],
    [37990, 'longing'],
    [38326, 'love'],
    [39154, 'lullaby'],
    [38698, 'lush'],
    [37858, 'lyrics'],
    [39638, 'madrigal'],
    [39304, 'male vocalist'],
    [38447, 'manic'],
    [38514, 'martial'],
    [39152, 'mashup'],
    [38012, 'mechanical'],
    [38853, 'medieval'],
    [21425, 'meditative'],
    [39087, 'medley'],
    [37689, 'melancholic'],
    [27552, 'mellow'],
    [38527, 'melodic'],
    [39607, 'microtonal'],
    [38928, 'minimalistic'],
    [37657, 'misanthropic'],
    [39130, 'monologue'],
    [25374, 'mood'],
    [39421, 'movement'],
    [38033, 'mysterious'],
    [25590, 'mythology'],
    [37922, 'nationalism'],
    [38014, 'natural'],
    [38320, 'nature'],
    [38081, 'nihilistic'],
    [38669, 'nocturnal'],
    [38675, 'noisy'],
    [56875, 'non-binary vocalist'],
    [39598, 'novelty'],
    [39155, 'nursery rhyme'],
    [38261, 'occult'],
    [38348, 'ominous'],
    [39562, 'opera'],
    [38499, 'optimistic'],
    [39166, 'oratorio'],
    [39599, 'orchestral'],
    [39159, 'outro'],
    [20198, 'pagan'],
    [39405, 'paranormal'],
    [39561, 'parody'],
    [39059, 'party'],
    [37949, 'passionate'],
    [38684, 'pastoral'],
    [38759, 'patriotic'],
    [38085, 'peaceful'],
    [38500, 'pessimistic'],
    [21466, 'philosophical'],
    [38196, 'playful'],
    [39132, 'poem'],
    [38503, 'poetic'],
    [20178, 'political'],
    [39601, 'polyphonic'],
    [31745, 'production'],
    [39400, 'progressive'],
    [27613, 'propaganda'],
    [38262, 'protest'],
    [38540, 'psychedelic'],
    [37666, 'quirky'],
    [38648, 'rain'],
    [38645, 'raw'],
    [38889, 'rebellious'],
    [20085, 'religious'],
    [38607, 'repetitive'],
    [39215, 'reprise'],
    [38528, 'rhythmic'],
    [38681, 'ritualistic'],
    [39594, 'rock opera'],
    [27331, 'romantic'],
    [21611, 'sad'],
    [39140, 'sampling'],
    [38264, 'sarcastic'],
    [21814, 'satanic'],
    [27824, 'satirical'],
    [38084, 'scary'],
    [21771, 'science fiction'],
    [39263, 'seasonal'],
    [39216, 'section'],
    [38936, 'self-hatred'],
    [27551, 'sensual'],
    [38581, 'sentimental'],
    [38501, 'serious'],
    [21329, 'sexual'],
    [39162, 'silence'],
    [39161, 'skit'],
    [38700, 'soft'],
    [27518, 'sombre'],
    [39149, 'sonata'],
    [37981, 'soothing'],
    [38073, 'space'],
    [38494, 'sparse'],
    [38449, 'spiritual'],
    [21634, 'sports'],
    [38091, 'spring'],
    [39449, 'stem'],
    [39653, 'string quartet'],
    [38543, 'style'],
    [38340, 'suicide'],
    [39086, 'suite'],
    [38258, 'summer'],
    [38419, 'surreal'],
    [38306, 'suspenseful'],
    [39165, 'symphony'],
    [38529, 'technical'],
    [38765, 'technique'],
    [37942, 'theme'],
    [37943, 'tone'],
    [39164, 'tone poem'],
    [38650, 'tribal'],
    [39412, 'triumphant'],
    [38653, 'tropical'],
    [38384, 'uncommon time signatures'],
    [38095, 'uplifting'],
    [28353, 'urban'],
    [38576, 'violence'],
    [39306, 'vocal group'],
    [38324, 'vulgar'],
    [30799, 'Wall of Sound'],
    [39101, 'waltz'],
    [38316, 'war'],
    [38086, 'warm'],
    [38257, 'winter'],
  ] as const
).map(([id, name]) => ({ id: id.toString(), name }))

export default descriptors
